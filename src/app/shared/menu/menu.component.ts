import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Option } from 'src/app/service/theme/option.model';
import { ThemeService } from 'src/app/service/theme/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() options: Array<Option>;
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private themeService: ThemeService) {}

  changeTheme(themeToSet) {
    this.themeChange.emit(themeToSet);
  }
}
