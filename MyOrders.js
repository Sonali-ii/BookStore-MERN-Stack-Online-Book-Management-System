const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  flatno: String,
  pincode: String,
  city: String,
  state: String,
  totalamount: String,

  // Info about the book
  booktitle: String,
  bookauthor: String,
  bookgenre: String,
  itemImage: String,
  description: String,

  // Buyer Info
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  userName: String,

  // Seller Info
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Seller' },
  sellerName: String,

  BookingDate: {
    type: String,
    default: () => new Date().toLocaleDateString('hi-IN')
  },
  Delivery: {
    type: String,
    default: () => {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 7);
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      return `${month}/${day}/${year}`;
    }
  }
}, { timestamps: true });

module.exports = mongoose.model('MyOrder', orderSchema);
