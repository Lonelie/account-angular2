export class Categories {

	getCategoriesSaved() {
		return [
			{text:"All Categories", checked:false, background:"5px solid #009688"},
			{text:"Flat", checked:false, background:"5px solid #00BCD4"},
			{text:"Leisure", checked:false, background:"5px solid #448AFF"},
			{text:"Car", checked:false, background:"5px solid #3F51B5"}, 
			{text:"Gifts",checked:false, background:"5px solid #7C4DFF"}
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