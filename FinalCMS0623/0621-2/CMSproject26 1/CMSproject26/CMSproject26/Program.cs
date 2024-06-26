using CMSproject26.Controllers;
using CMSproject26.Models;
using CMSproject26.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();










builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.
        GetConnectionString("CMSproject26Connection"));
});







builder.Services.AddScoped<IUserTypeMasterRepository, UserTypeMasterRepository>();
builder.Services.AddScoped<IUserMasterRepository, UserMasterRepository>();
builder.Services.AddScoped<IContentMasterRepository, ContentMasterRepository>();

builder.Services.AddScoped<ILoginRepository, LoginRepository>();









var app = builder.Build();





// CORS Configuration
app.UseCors(options =>
{
    options.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader();
});











// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    //app.UseSwaggerUI();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "CMS API");
    });
}

app.UseAuthorization();

app.MapControllers();

app.Run();
