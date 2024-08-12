    const prizesbooks = [15,60,130,14,10,88,66,70];

    let atual = 0;
    let barato = 0;

    for(let atual = 0; atual < prizesbooks.length; atual++) {
        if (prizesbooks[atual] < prizesbooks[barato]) {
            barato = atual;
        }
    }
    console.log(`O livro mais barato custa ${prizesbooks[barato]} reais.`);