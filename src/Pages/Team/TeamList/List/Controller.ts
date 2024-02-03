import Isotope, { type IsotopeOptions } from "isotope-layout";

export class Controller {
  private width = 0;
  public masonry?: Isotope;
  private listNode?: HTMLElement;
  public static LAYOUT_OPTIONS: IsotopeOptions = {
    layoutMode: "fitRows",
    fitRows: {
      gutter: 20,
    },
    stagger: 30,
  };

  public initialize(search = "") {
    if (!this.masonry) {
      this.createLayout();
    }
    if (search) {
      this.search();
    }
  }

  public registerNode(listNode: HTMLElement) {
    this.listNode = listNode;
  }

  public applyDOMUpdate() {
    this.masonry?.reloadItems();
  }

  public destroy() {
    this.masonry?.destroy();
  }

  public resize(width: number) {
    if (width === this.width) {
      return;
    }
    this.createLayout(width * 0.02);
  }

  public search(search = "") {
    const lowered = search.toLowerCase();
    this.masonry?.arrange(
      this.merge({
        filter: node => {
          if (this.isValidElement(node)) {
            const name = node.querySelector(".name");
            if (this.isValidElement(name)) {
              return name.innerText.toLowerCase().includes(lowered);
            }
          }
          return false;
        },
      }),
    );
  }

  private merge(options: IsotopeOptions) {
    return Object.assign({}, Controller.LAYOUT_OPTIONS, options);
  }

  private isValidElement(node: Element | null): node is HTMLElement {
    return !!node;
  }

  private createLayout(gutter = 20) {
    if (!this.listNode) {
      return;
    }
    const options = this.merge({ fitRows: { gutter } });
    if (this.masonry) {
      this.masonry.arrange(options);
    } else {
      this.masonry = new Isotope(this.listNode, options);
    }
  }
}
