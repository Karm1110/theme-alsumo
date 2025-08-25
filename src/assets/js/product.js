import salla from '@salla.sa/twilight';

// You can listen to the product events here, for example:
salla.event.on('product-options::change', (response) => {
    console.log('Product options changed', response);
});
