export class Email {
  id: number;
  name: string;
  bio: string;
  phone: number;
  imageUrl: string;
  address: string;

  constructor(id=0, name='',bio = '', address = '', phone = 0, imageUrl = 'https://media.gettyimages.com/photos/closeup-of-pizza-on-table-picture-id995467932?s=612x612') {
    this.id = id
    this.name = name
    this.bio = bio
    this.address = address
    this.phone = phone
    this.imageUrl = imageUrl
  }
}
