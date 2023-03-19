const Booking=require("../models/slotbooking");

const show=async (req,res) =>{
    
    res.render("user/profile",{title:"Profile"});
};

const bookingGet =async (req,res) =>{
    const id =req.params.id
    console.log(id);
    try{
        const bookings= Booking.find({
            "belongsto":id
        });

        console.log(bookings)
        res.render("user/bookings",{title:"Booked Tickets",bookings:bookings});
    }catch(err)
    {
        console.log(err);
    }
}

module.exports={bookingGet,show};