import { Component } from "@angular/core";

@Component({
    selector: 'app-create-post2',
    templateUrl: './post-create.component2.html'
})
export class PostCreateComponent2 {

    newPost = "NO CONTENT";
    onAddPost(postInput: HTMLTextAreaElement) {
        this.newPost = postInput.value;
    }

}