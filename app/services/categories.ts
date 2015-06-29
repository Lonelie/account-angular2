export class Categories {

	getCategoriesSaved() {
		return [
			{text:"All Categories", checked:false, color:"blue"},
			{text:"Flat", checked:false, color:"blue"},
			{text:"Leisure", checked:false, color:"green"},
			{text:"Nutrition", checked:false, color:"pink"},
			{text:"University", checked:false, color:"blue"},
			{text:"Car", checked:false, color:"orange"}, 
			{text:"Piano lessions",checked:false, color:"violet"}
		];
	}
}

export class Category {
  text: String;
  checked: boolean;
  color: String;

  constructor(text: String, checked: boolean, color: String) {
    this.text = text;
    this.checked = checked;
    this.color = color;
  }
}