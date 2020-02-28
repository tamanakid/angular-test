import { Component, OnInit } from '@angular/core';

import { PostsService } from '@services/posts.service';
import { Post } from '@classes/post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})

export class FeedComponent implements OnInit {

  private posts: Post[] = [];

  constructor(
    private postsService: PostsService,
  ) { }

  ngOnInit() {
    this.postsService.getAllPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

}
