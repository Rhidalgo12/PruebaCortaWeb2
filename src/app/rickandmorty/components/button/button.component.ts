import { HttpClientModule } from '@angular/common/http';
import { Component} from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RymServicesService } from '../../services/rym-services.service';

@Component({
  selector: 'rym-button',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [RymServicesService],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  
  
}
