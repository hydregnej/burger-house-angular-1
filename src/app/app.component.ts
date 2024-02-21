import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currency = "$"

  form = this.fb.group( {
    order: ["", Validators.required],
    name: ["", Validators.required],
    phone: ["", Validators.required]
  })

  cardData = [
    {
      image: "burger-1.svg",
      title: "Бургер чеддер & бекон",
      text: "Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус",
      price: 8,
      basePrice: 8,
      grams: "360 гр",
    },
    {
      image: "burger-2.svg",
      title: "BBQ с беконом и курицей",
      text: "Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ",
      price: 7,
      basePrice: 7,
      grams: "390 гр",
    },
    {
      image: "burger-3.svg",
      title: "Дабл биф бургер",
      text: "Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат,бекон, красный лук, соус бургер, горчица",
      price: 10,
      basePrice: 10,
      grams: "420 гр",
    },
    {
      image: "burger-4.svg",
      title: "Баварский бургер",
      text: "Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат айсберг",
      price: 7,
      basePrice: 7,
      grams: "220 гр",
    },
    {
      image: "burger-5.svg",
      title: "Бекон чизбургер",
      text: "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень",
      price: 8,
      basePrice: 8,
      grams: "220 гр",
    },
    {
      image: "burger-6.svg",
      title: "Индиана бургер",
      text: "Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
      price: 9,
      basePrice: 9,
      grams: "320 гр",
    },
    {
      image: "burger-7.png",
      title: "Вегги бургер",
      text: "Булочка для бургера, вегетарианская котлета, красный лук, сыр, свежий томат, соус барбекю, соус сырный, салат айсберг",
      price: 8,
      basePrice: 8,
      grams: "280 гр",
    },
    {
      image: "burger-8.png",
      title: "Плаксивый Джо",
      text: "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, красный лук, сыр, перец халапеньо, кетчуп, зелень",
      price: 7,
      basePrice: 7,
      grams: "380 гр",
    },
    {
      image: "burger-9.png",
      title: "Двойной чиз бургер",
      text: "Булочка для бургера, две говяжьи котлеты, двойной сыр чеддар, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
      price: 11,
      basePrice: 11,
      grams: "400 гр",
    },
    {
      image: "burger-10.png",
      title: "Фрешбургер",
      text: "Булочка для бургера, говяжья котлета, бекон, сыр чеддар, яйцо, салями, соус барбекю, соус сырный, салат айсберг, свежий томат",
      price: 9,
      basePrice: 9,
      grams: "300 гр",
    },
    {
      image: "burger-11.png",
      title: "Цуккини бургер",
      text: "Булочка для бургера, вегетарианская котлета из нута, цуккини на гриле, помидор, огурец маринованный, сыр, горчичный соус, кетчуп, зелень",
      price: 8,
      basePrice: 8,
      grams: "320 гр",
    },
    {
      image: "burger-12.png",
      title: "Двойной бургер чеддар",
      text: "Булочка для бургера, котлета говяжья, грудинка, красный лук, огурец маринованный, томат, кетчуп, двойной сыр чеддар, горчица, зелень",
      price: 9,
      basePrice: 9,
      grams: "360 гр",
    },
  ]

  constructor(private fb: FormBuilder) {
  }
  scrollTo(target: HTMLElement, burger?: any) {
    target.scrollIntoView({behavior: "smooth"});
    if (burger) {
      this.form.patchValue({order: burger.title + ' (' + burger.price + ' ' + this.currency + ')'});
    }
  }


  confirmOrder() {
    if (this.form.valid) {
      alert("Ваш заказ в обработке, ожидайте звонка!")
      this.form.reset()
    }
  }

  changeCurrency() {

      let newCurrency = "$"
      let coefficient = 1


        if (this.currency === "$") {
          newCurrency = "₽"
          coefficient = 91
        } else if (this.currency === "₽") {
          newCurrency = "BYN"
          coefficient = 3
        } else if (this.currency === "BYN") {
          newCurrency = "KZT"
          coefficient = 450
        } else if (this.currency === "KZT") {
          newCurrency = "TRY"
          coefficient = 30
        } else if (this.currency === "TRY") {
          newCurrency = "AED"
          coefficient = 4
        }
        this.currency = newCurrency

        this.cardData.forEach((item: any) => {
          item.price = +(item.basePrice * coefficient).toFixed(1)
        })

  }

}
