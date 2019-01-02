import { TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';

import { ApiCommunicationService } from './api-communication.service';

describe('ApiCommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
  ]
  }));

  it('should be created', () => {
    const service: ApiCommunicationService = TestBed.get(ApiCommunicationService);
    expect(service).toBeTruthy();
  });
});
