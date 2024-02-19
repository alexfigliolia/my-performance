import React from "react";
import { Repository } from "Components/Repository";
import {
  type ListAvailableRepositoriesQuery,
  type ListAvailableRepositoriesQueryVariables,
  Platform,
} from "GQL";
import { GQLRequest, listAvailableRepositories } from "GQL";
import { Organizations } from "State/Organizations";
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

  public static renderItem = ({
    name,
    description,
    html_url,
    language,
    platform,
    platform_id,
  }: AvailableRepository) => {
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
}
