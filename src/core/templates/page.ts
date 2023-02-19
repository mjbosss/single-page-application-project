abstract class Page {
    protected container: HTMLElement;
    static TextObject = {};

    protected constructor(id: string) {
        this.container = document.createElement('div');
        this.container.id = id;
    }

    protected createHeaderTitle(text: string) {
        const headerTitle = document.createElement('h1');
        headerTitle.innerText = text;
        return headerTitle;
    }

    protected createBodyText(text: string) {
        const bodyText = document.createElement('h4');
        bodyText.innerText = text;
        return bodyText;
    }

    render() {
       return this.container;
    }
}
export default Page;
