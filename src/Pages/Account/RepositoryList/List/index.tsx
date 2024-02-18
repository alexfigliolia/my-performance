import React, { Component } from "react";
import { MasonryList } from "Components/Layouts";
import { Repository } from "Components/Repository";
import type {
  ListAvailableRepositoriesQuery,
  ListAvailableRepositoriesQueryVariables,
} from "GQL";
import { GQLRequest, listAvailableRepositories, Platform } from "GQL";
import { InfiniteScroll } from "Hooks/InfiniteScroll";
import { Organizations } from "State/Organizations";

export class List extends Component<Props, State> {
  private promise: Promise<IRepository[]>;
  public state: State = { repositories: [] };
  private InfiniteScroll: InfiniteScroll<IRepository[]>;
  constructor(props: Props) {
    super(props);
    this.promise = List.queryNextPage(1);
    this.InfiniteScroll = new InfiniteScroll({
      buffer: 100,
      onData: this.onSequence,
      loadNextSequence: List.queryNextPage,
    });
  }

  public override async componentDidMount() {
    const repositories = await this.promise;
    this.onSequence(repositories);
    this.InfiniteScroll.setLastPageSize(repositories.length);
    this.InfiniteScroll.setCurrentPage(2);
    setTimeout(() => {
      this.InfiniteScroll.initialize();
    }, 100);
  }

  public override shouldComponentUpdate(
    { search }: Props,
    { repositories }: State,
  ) {
    if (search !== this.props.search) return true;
    return repositories.length !== this.state.repositories.length;
  }

  public override componentWillUnmount() {
    this.InfiniteScroll.destroy();
  }

  private static queryNextPage = async (page: number) => {
    const result = await List.query(page.toString());
    return result.data.listAvailableRepositories;
  };

  private static query(page = "1") {
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

  private onSequence = (sequence: IRepository[]) => {
    this.setState(ps => ({
      repositories: [...ps.repositories, ...sequence],
    }));
  };

  private renderItem = ({
    id,
    name,
    description,
    html_url,
    language,
    source,
  }: IRepository) => {
    return (
      <Repository
        key={id}
        name={name}
        url={html_url}
        source={source}
        language={language}
        description={description}
      />
    );
  };

  public override render() {
    const { search } = this.props;
    const { repositories } = this.state;
    if (!repositories.length) {
      return null;
    }
    return (
      <MasonryList
        search={search}
        list={repositories}
        renderItem={this.renderItem}
      />
    );
  }
}

interface Props {
  search: string;
}

interface State {
  repositories: IRepository[];
}

type IRepository =
  ListAvailableRepositoriesQuery["listAvailableRepositories"][number];
