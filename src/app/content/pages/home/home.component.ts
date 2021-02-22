import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterHandlerService } from 'src/app/core/services/router-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor(
    private RHS: RouterHandlerService,
    private activeRoute: ActivatedRoute
  ) {
    this.RHS.handleRoute(this.activeRoute);
  }
  showFiller = false;
  ngOnInit(): void {
  }

}
