import { Directive, Input, OnInit } from "@angular/core";
import { Field } from "../models/field";
@Directive({
  selector:'base-form'
})
export class BaseFormDirective implements OnInit{

  @Input() field: Field<any>;

  ngOnInit(){

  }

}