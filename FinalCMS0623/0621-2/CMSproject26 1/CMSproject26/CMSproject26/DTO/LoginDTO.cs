using System.ComponentModel.DataAnnotations;

namespace CMSproject26.DTO
{
    public class LoginDTO
    {


        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        //public string UpdatedBy { get; set; }
    }
}



//public class LoginDTO
//{
//    [Required]
//    public string Email { get; set; }

//    [Required]
//    public string Password { get; set; }

//    public string UpdatedBy { get; set; } // Add this property to store the UpdatedBy value
//}
