using EssenceAPI.Data;
using EssenceAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<ISneakerService, SneakerService>();
builder.Services.AddDbContext<DataContext>();


var app = builder.Build();

app.UseCors(builder => builder
.AllowAnyHeader()
.AllowAnyMethod()
// Need this for SignalR to be Authenticated to the server
.AllowCredentials()
.WithOrigins("http://localhost:3000"));

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Gives us access to all of the services we have in this app
using var scope = app.Services.CreateScope();

var services = scope.ServiceProvider;

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
