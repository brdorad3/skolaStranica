using MongoDB.Driver;
using MyWebApp.Controllers;
using MyWebApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyWebApp.Services
{
    public class MongoDbService
    {
        private readonly IMongoCollection<FormData> _formDataCollection;

        public MongoDbService()
        {
            
            var client = new MongoClient("mongodb+srv://vunicadis:OzLRI5pCZr3Ibdrb@cluster0.57usm.mongodb.net/csharsp?retryWrites=true&w=majority&appName=Cluster0");
            
            var database = client.GetDatabase("csharp");  
            _formDataCollection = database.GetCollection<FormData>("Users");  
        }

        public async Task SaveFormDataAsync(FormData formData)
        {
            
            await _formDataCollection.InsertOneAsync(formData);
        }

        public async Task<List<FormData>> GetFormDataAsync()
        {
            return await _formDataCollection.Find(_ => true).ToListAsync();
        }
    }
}
