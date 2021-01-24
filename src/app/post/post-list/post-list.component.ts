import { Component , Input} from "@angular/core";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls : ['./post-list.component.css']
})
export class PostListComponent{

    // posts = [
    //     {title: "First content title", content : "this is first content"},
    //     {title: "Second content title", content : "this is Second content"},
    //     {title: "Thirt content title", content : "this is thirt content"}
    // ]s
    @Input()  posts = []
}