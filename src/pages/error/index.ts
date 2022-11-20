import Page from "../../core/templates/page";

class ErrorPage extends Page {
    static TextObject = {
        MainTitle: 'Error 404',
    };
    constructor(id: string) {
        super(id);
    }
    render() {
        const title = this.createHeaderTitle(ErrorPage.TextObject.MainTitle);
        this.container.append(title);
        return this.container;
    }
}

export default ErrorPage;
