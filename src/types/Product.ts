import Category from "./Category";
import Image from "./Image";

export default interface Product{
	id : number,
	title : string,
	description : string,
	price : number,
	quantityStock : number,
	size : string,
	images : Image[],
	category : Category
}