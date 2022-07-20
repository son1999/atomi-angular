import {
  Directive,
  ElementRef,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ToastrService } from 'src/app/_core/services/toastr/toastr.service';

@Directive({
  selector: '[appCurrencyMask]',
})
export class CurrencyMaskDirective implements OnInit, OnChanges {
  $element: any;
  @Input() number: Number | null = null;
  @Output() numberChange = new EventEmitter();

  @Input() config: any = {
    allowNegative: false,
    decimal: '.',
    thousands: ',',
    nullable: true,
    allowZero: true,
  };

  constructor(public element: ElementRef, private cdr: ChangeDetectorRef, private toars: ToastrService) {
    this.$element = this.element.nativeElement;
  }
  ngOnInit(): void {
    this.$element.addEventListener('change', this.onChange.bind(this));
    this.$element.addEventListener('keyup', this.onKeyup.bind(this));
    this.$element.addEventListener('blur', this.onBlur.bind(this));
    const numString = this.number === null ? '' : this.number.toString();
    this.format(numString, false);
    this.cdr.detectChanges();
  }
  ngOnChanges(changes: SimpleChanges): void {
      const {currentValue , previousValue} = changes?.number;
      if(currentValue != previousValue){
        this.format(currentValue ? currentValue.toString() : '', false);
      }
  }
  onChange(event: any) {
    const { value = '' } = event.target;
    this.format(value);
  }
  onBlur(event: any) {
    const { value = '' } = event.target;
    this.format(value);
  }
  format(value: string, emit = true) {
  
    const isNegative =
      this.config.allowNegative &&
      typeof value[0] != 'undefined' &&
      value[0] === '-';
    const regex = new RegExp(`[^ 0-9\\` + this.config.decimal + `]`, 'g');
    const raw = value.replace(regex, '').split(this.config.decimal);
    if(raw.length > 0 && raw[0].length > 11){
      this.toars.warning('Số tiền quá dài, vui lòng nhập lại');
      this.numberChange.emit(null);
      this.$element.value = '';
      return;
    }
    let numberString: string | null = raw[0] || null;
    const numberStringValue = raw[0] || null;

    if (numberString != null) {
      const buffer = [];
      while (numberString.length > 0) {
        buffer.unshift(
          numberString.substr(Math.max(0, numberString.length - 3), 3)
        );
        numberString = numberString.substr(0, numberString.length - 3);
      }
      numberString = buffer.join(this.config.thousands);
    }
    const decimals = typeof raw[1] != 'undefined' ? raw[1] : null;
    let resultView = '';
    let resultValue = '';
    if (isNegative) {
      resultView += '-';
      resultValue += '-';
    }
    if (numberString) {
      resultView += numberString;
      if (decimals !== null) {
        resultView += `${this.config.decimal}${decimals}`;
      }
    }
    if (numberStringValue) {
      resultValue += numberStringValue;
      if (decimals) {
        resultValue += `.${decimals}`;
      }
    }
    if (emit) {
      this.numberChange.emit(Number(resultValue));
    }
    this.$element.value = resultView;
  }

  onKeyup(event: any) {
    const { value = '' } = event.target;
    this.format(value);
  }

  emit() {}
}
