import AbstractView from './AbstractView.js';

export default class extends Login {

    constructor(params) {
        super(params);
        this.setTitle(title:"Login");
    }

    async getHtml() {
        return `
        <`
    }
}