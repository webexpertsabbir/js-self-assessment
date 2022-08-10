function paperRequirements(fristBookQ, secondBookQ, thirdBookQ){
    const fristBookPage = 100;
    const secondBookPage = 200;
    const thirdBookPage = 300;
    
    const fristBook = fristBookPage * fristBookQ;
    const secondBook = secondBookPage * secondBookQ;
    const thirdBook = thirdBookPage * thirdBookQ;
    
    const totalBookPage = fristBook + secondBook + thirdBook;
    return totalBookPage;
    
    }
    const booksPage = paperRequirements(0, 2, 0);
    console.log(booksPage);