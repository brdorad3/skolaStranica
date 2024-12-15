using MyWebApp.Services;
var builder = WebApplication.CreateBuilder(args);


builder.Services.AddSingleton<MongoDbService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost",
        builder => builder.WithOrigins("http://localhost:5500") 
                          .AllowAnyHeader()
                          .AllowAnyMethod());
});


builder.Services.AddRazorPages();
builder.Services.AddControllers();
builder.WebHost.UseUrls("http://localhost:5000");

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}


app.UseCors("AllowLocalhost");

app.UseRouting();

app.UseAuthorization();
app.MapControllers();
app.MapRazorPages();

app.Run();
