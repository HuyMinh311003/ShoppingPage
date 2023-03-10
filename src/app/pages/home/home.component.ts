import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  books: Array<any> = [
    {
      id: 1,
      name: "Sword Art Online: Progressive - Tập 5",
      price: 120000,
      image:"../assets/SAO.jpg",
      publisher: "IPM",
      outOfOrder: true
    },
    {
      id: 2,
      name: "Eighty Six - Tập 7",
      price: 125000,
      image:"../assets/86.jpg",
      publisher: "IPM",
      outOfOrder: false
    },
    {
      id: 3,
      name: "Re: Zero - Tập 13",
      price: 110000,
      image:"../assets/rezero.jpg",
      publisher: "IPM",
      outOfOrder: false
    },
    {
      id: 4,
      name: "Overlord - Tập 6",
      price: 135000,
      image:"../assets/overlord.jpg",
      publisher: "IPM",
      outOfOrder: true
    },
    {
      id: 5,
      name: "Thám tử đã chết - Tập 5",
      price: 100000,
      image:"../assets/thamtudachet.jpg",
      publisher: "Hikari Light Novel",
      outOfOrder: false
    },
    {
      id: 6,
      name: "Spy Room -  Tập 1",
      price: 120000,
      image:"../assets/spyroom.jpg",
      publisher: "Hikari Light Novel",
      outOfOrder: false
    },
    {
      id: 7,
      name: "Diệt slime suốt 300 năm tôi level max lúc nào chẳng hay - Tập 7",
      price: 100000,
      image:"../assets/slime.jpg",
      publisher: "Tsuki Light Novel",
      outOfOrder: true
    },
    {
      id: 8,
      name: "Vì con gái tôi có thể đánh bại cả ma vương - Tập 4",
      price: 100000,
      image:"../assets/mavuong.jpg",
      publisher: "Skybooks",
      outOfOrder: false
    },
    {
      id: 9,
      name: "Arya bàn bên thỉnh thoảng lại trêu ghẹo tôi bằng tiếng Nga - Tập 1",
      price: 120000,
      image:"../assets/arya.jpg",
      publisher: "Kim Đồng",
      outOfOrder: false
    },
    {
      id: 10,
      name: "Liệu có sai lầm khi tìm kiếm cuộc gặp gỡ định mệnh trong Dungeon - Tập 5",
      price: 90000,
      image:"../assets/danmachi.jpg",
      publisher: "Kim Đồng",
      outOfOrder: true
    }
  ];
}
