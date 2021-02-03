import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-updated",
  templateUrl: "./updated.component.html",
  styleUrls: ["./updated.component.css"],
})
export class UpdatedComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.params.id);
  }

  ngOnInit() {}
}
