import Isotope, { type IsotopeOptions } from "isotope-layout";

export class Controller {
  private width = 0;
  public masonry?: Isotope;
  private listNode?: HTMLElement;
  public static defaultOptions: IsotopeOptions = {
    layoutMode: "masonry",
    masonry: {
      gutter: 20,
    },
    transitionDuration: 0,
  };
  private static readonly GUTTER_MULTIPLIER = 0.02;
  private options: IsotopeOptions = Controller.defaultOptions;

  public initialize(search = "") {
    if (!this.masonry) {
      this.createLayout();
    }
    if (search) {
      this.search(search);
    }
  }

  public registerNode(listNode: HTMLElement) {
    this.listNode = listNode;
  }

  public get listHeight() {
    if (!this.listNode) {
      return;
    }
    return this.listNode.getBoundingClientRect().height;
  }

  public applyDOMUpdate() {
    this.masonry?.reloadItems();
    this.masonry?.arrange(this.options);
  }

  public destroy() {
    this.masonry?.destroy();
  }

  public resize(width: number) {
    if (width === this.width) {
      return;
    }
    this.width = width;
    this.createLayout(this.width * Controller.GUTTER_MULTIPLIER);
  }

  public search(search = "") {
    const lowered = search.toLowerCase();
    this.masonry?.arrange(
      this.merge({
        filter: node => {
          if (this.isValidElement(node)) {
            const searchableNodes = Array.from(
              node.querySelectorAll(".searchable"),
            );
            for (const searchNode of searchableNodes) {
              if (
                this.isValidElement(searchNode) &&
                searchNode.textContent?.toLowerCase()?.includes(lowered)
              ) {
                return true;
              }
            }
          }
          return false;
        },
      }),
    );
  }

  private merge(options: IsotopeOptions = {}) {
    this.options = Object.assign({}, this.options, options);
    return this.options;
  }

  private isValidElement(node: Element | null): node is HTMLElement {
    return !!node;
  }

  private createLayout(gutter = 20) {
    if (!this.listNode) {
      return;
    }
    if (gutter !== this.currentGutter) {
      this.merge({ masonry: { gutter } });
    }
    if (this.masonry) {
      this.masonry.arrange(this.options);
    } else {
      this.masonry = new Isotope(this.listNode, this.options);
    }
  }

  private get currentGutter() {
    return this.options.masonry?.gutter ?? 0;
  }
}
