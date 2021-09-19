export class Contacts {
  id: number;
  name: string;
  imageUrl: string;

  constructor(id = 0, name = '', imageUrl = 'https://media.gettyimages.com/photos/closeup-of-pizza-on-table-picture-id995467932?s=612x612') {
    this.id = id
    this.name = name
    this.imageUrl = imageUrl
  
  }
}
