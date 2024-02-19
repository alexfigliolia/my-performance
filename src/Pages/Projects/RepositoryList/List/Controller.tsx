import React from "react";
import { Repository, RepositorySkeleton } from "Components/Repository";
import {
  type ListAvailableRepositoriesQuery,
  type ListAvailableRepositoriesQueryVariables,
  Platform,
} from "GQL";
import { GQLRequest, listAvailableRepositories } from "GQL";
import { Organizations } from "State/Organizations";
import { Screen } from "State/Screen";
import type { AvailableRepository } from "./types";

export class Controller {
  public static queryNextPage = async (page: number) => {
    const result = await this.query(page.toString());
    return result.data.listAvailableRepositories;
  };

  public static query(page = "1") {
    return GQLRequest<
      ListAvailableRepositoriesQuery,
      ListAvailableRepositoriesQueryVariables
    >({
      query: listAvailableRepositories,
      variables: {
        page,
        ...Organizations.getRepositoryQueryParams(Platform.Github),
      },
    });
  }

  public static renderItem = (
    repository: AvailableRepository | null,
    index: number,
  ) => {
    if (!repository) {
      return <RepositorySkeleton key={index} />;
    }
    const { name, description, html_url, language, platform, platform_id } =
      repository;
    return (
      <Repository
        key={platform_id}
        name={name}
        url={html_url}
        platform={platform}
        language={language}
        description={description}
      />
    );
  };

  public static createLoaders(): null[] {
    const { width } = Screen.getState();
    let N: number;
    if (width >= 1350) {
      N = 3;
    } else if (width >= 800) {
      N = 2;
    } else {
      N = 1;
    }
    return new Array(N).fill(null);
  }
}
