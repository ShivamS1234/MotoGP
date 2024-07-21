using System;
using System.IO;
using System.Net;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI.WebControls;
using Moto_GP.App_Code;
using System.Runtime.CompilerServices;
using System.Dynamic;
using System.Security.Policy;
using Razorpay.Api;
using Moto_GP.Models;
using Microsoft.AspNetCore.Mvc;
using HttpPostAttribute = Microsoft.AspNetCore.Mvc.HttpPostAttribute;
using ActionResult = System.Web.Mvc.ActionResult;
using System.Runtime.InteropServices;

namespace Moto_GP.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult MapMenu()
        {
            return View();
        }

        public ActionResult BookSeats()
        {
            return View();
        }

        public ActionResult TicketRegistration()
        {
            return View();
        }
        public ActionResult Customers()
        {
            return View();
        }
        public ActionResult Payment()
        {
            return View();
        }

        [BindProperty]
        public OrderEntity _OrderDetails { get; set; }
        public ActionResult InitiatePayment(OrderEntity orderEntity)
        {
            string key = "rzp_test_EfZIS0xV73ytkR";
            string secret = "K1rTwvSmB8kVtXoEfOL5YLvq";

            Random _random = new Random();
            string TrnsactionId = _random.Next(0, 10000).ToString();


            Dictionary<string, object> input = new Dictionary<string, object>();

            input.Add("amount", Convert.ToDecimal(orderEntity.TotalAmount)*100); // this amount should be same as transaction amount
            input.Add("currency", "INR");
            input.Add("receipt", "TrnsactionId");


            RazorpayClient client = new RazorpayClient(key, secret);
            Razorpay.Api.Order order = client.Order.Create(input);


            ViewBag.orderid = order["id"].ToString();
            return View("Payment", _OrderDetails);

        }

        [HttpPost]
        public IActionResult SendOTP(string email)
        {

            string res = "";
            int otpsent = 110011;

            try
            {
                SendEmail es = new SendEmail();
                int otp = es.GenerateOTP();
                es.SendMyEmail(email, "OTP to verify email", "Hello" +
                    ", This is your One time Password." + otp +
                    "Please don't share this OTP with anyone");

                res = "SUCCESS";
                otpsent = otp;
            }
            catch (Exception ex)
            {
                res = "FAIL";

            }

            return (IActionResult)Json(otpsent, JsonRequestBehavior.AllowGet);
        }
    }
}