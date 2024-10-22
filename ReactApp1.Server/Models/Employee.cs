namespace ReactApp1.Server.Models
{
    public class Employee
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Manager { get; set; }
        public string Position { get; set; }
        public string? Image { get; set; }
        public string Department { get; set; }
        public string email { get; set; }
        public Employee() { }
    }
}
