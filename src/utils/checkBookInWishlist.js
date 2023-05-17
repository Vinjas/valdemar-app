export function checkBookInWishlist(wishlist, isbn) {
  for (let i = 0; i < wishlist.length; i++) {
    if (wishlist[i].isbn === isbn) {
      return true;
    }
  }

  return false;
}
