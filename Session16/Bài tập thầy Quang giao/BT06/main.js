let book={
    bookId: "",
    bookName: "",
    price:"",
    author: "",
    bookStatus: "",
    inputData: function(bookId,bookName,price,author,bookStatus){
        this.bookId=bookId;
        this.bookName=bookName;
        this.price=price;
        this.author=author;
        this.bookStatus=bookStatus;
    },

    displayInfo: function(){
        console.log("bookId là:",this.bookId);
        console.log("bookName là:",this.bookName);
        console.log("price là:",this.price);
        console.log("author là:",this.author);
        console.log("bookStatus là:",this.bookStatus);
    }

}
book.inputData("001","Mỗi ngày tôi chọn 1 niềm vui","10000","Nguyễn Văn A","Nhà sách kim đồng");
book.displayInfo();