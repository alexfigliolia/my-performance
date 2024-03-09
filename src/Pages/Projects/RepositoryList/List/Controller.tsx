import React from "react";
import { Repository } from "Components/Repository";
import type {
  AvailableRepositoriesQuery,
  AvailableRepositoriesQueryVariables,
  AvailableRepositoriesStreamSubscription,
  AvailableRepositoriesStreamSubscriptionVariables,
} from "GQL";
import {
  availableRepositories,
  availableRepositoriesStream,
  GQLServiceClient,
  GQLServiceSubscription,
} from "GQL";
import { Organizations } from "State/Organizations";
import { Projects } from "State/Projects";
import type { AvailableRepository } from "./types";

export class Controller {
  public static search = "";
  private static readonly NOOP = () => {};
  public static abort = this.NOOP;

  public static setSearch(search: string) {
    this.search = search;
  }

  public static queryNextPage = (page = 1) => {
    if (Projects.getState().stream) {
      return this.subscriptionQuery(page);
    }
    return this.HTTPQuery(page);
  };

  public static renderItem = (repository: AvailableRepository) => {
    const { id, name, description, html_url, language, platform } = repository;
    return (
      <Repository
        id={id}
        key={id}
        name={name}
        url={html_url}
        platform={platform}
        language={language}
        description={description}
      />
    );
  };

  private static async HTTPQuery(page = 1) {
    const Client = new GQLServiceClient<
      AvailableRepositoriesQuery,
      AvailableRepositoriesQueryVariables
    >({
      query: availableRepositories,
      variables: this.queryVariables(page),
    });
    this.abort = () => Client.abort();
    try {
      const result = await Client.request();
      this.abort = this.NOOP;
      return result.data.availableRepositories;
    } catch (error) {
      this.abort = this.NOOP;
      throw error;
    }
  }

  private static subscriptionQuery(page = 1) {
    const subscription = new GQLServiceSubscription<
      AvailableRepositoriesStreamSubscription,
      AvailableRepositoriesStreamSubscriptionVariables
    >({
      query: availableRepositoriesStream,
      variables: this.queryVariables(page),
    });
    return new Promise<AvailableRepository[]>((resolve, reject) => {
      subscription.onData(stream => {
        if (!stream.data) {
          return reject();
        }
        subscription.closeAll();
        Projects.closeStream();
        resolve(stream.data.availableRepositoriesStream);
      });
      subscription.onError(error => {
        subscription.closeAll();
        reject(error);
      });
      subscription.open();
    });
  }

  private static queryVariables(page = 1) {
    return {
      search: this.search,
      offset: (page - 1) * 30,
      organizationId: Organizations.getState().current,
    };
  }
}
