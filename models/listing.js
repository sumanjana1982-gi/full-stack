const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const mongooseSchema=new Schema({
    title:{type: String,
           required:true,
    },
    descrip:String,

    img: {
    type: String,   
     default: "https://www.google.com/search?sca_esv=080dae4805299e94&sxsrf=APpeQnsZNe5NsTuMPxnC4cqjiNpJR8PoYg:1790602187660&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832VstEKsVDqPorK0Gahnm2nq-aQnTz_mBV-EZYISbLc-StUIq_PhL7hb0Qt0YiIGOHmbgdzA7WLFluE76f-Gw9-kn_vuuCCPCJpHu1gmKqCIuSZd8T1yAgM1fgsi1HxBhCFiENZXz4ZKHEBpVkmKN66EIoEw_7IqUjVjTZo0KvW1khG7vGQ&q=images&sa=X&sqi=2&ved=2ahUKEwiL0ND6sJGXAxWXm-EIHVMpF5YQtKgLegQIGBAB&biw=1470&bih=835&dpr=2#sv=CAMSURoyKhBlLTFIN2Y3TkFtOFNVcmtNMg4xSDdmN05BbThTVXJrTToONU9EaXB5WklxXzJLOE0gBCoXCgFzEhBlLTFIN2Y3TkFtOFNVcmtNGAEwARgHIO796JoJSggQARgBIAEoAQ",
    set: (v) => v === "" 
        ? "https://www.google.com/search?sca_esv=080dae4805299e94&sxsrf=APpeQnsZNe5NsTuMPxnC4cqjiNpJR8PoYg:1790602187660&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832VstEKsVDqPorK0Gahnm2nq-aQnTz_mBV-EZYISbLc-StUIq_PhL7hb0Qt0YiIGOHmbgdzA7WLFluE76f-Gw9-kn_vuuCCPCJpHu1gmKqCIuSZd8T1yAgM1fgsi1HxBhCFiENZXz4ZKHEBpVkmKN66EIoEw_7IqUjVjTZo0KvW1khG7vGQ&q=images&sa=X&sqi=2&ved=2ahUKEwiL0ND6sJGXAxWXm-EIHVMpF5YQtKgLegQIGBAB&biw=1470&bih=835&dpr=2#sv=CAMSURoyKhBlLTFIN2Y3TkFtOFNVcmtNMg4xSDdmN05BbThTVXJrTToONU9EaXB5WklxXzJLOE0gBCoXCgFzEhBlLTFIN2Y3TkFtOFNVcmtNGAEwARgHIO796JoJSggQARgBIAEoAQ"
        : v
},
    price:String,
    location:String,
    country:String,
});
const listing=mongoose.model("listing",mongooseSchema);
module.exports=listing;