using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Employee.Repository;
using Employee.Repository.Interfaces;
using Swashbuckle.AspNetCore.Swagger;

namespace Employee
{
    public class Startup
    {
        private IConfiguration _configuration { get; }
        private static string _connectionString { get; set; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            var builder = new ConfigurationBuilder()
                            .SetBasePath(System.IO.Directory.GetCurrentDirectory())
                            .AddJsonFile("AppSettings.json");

            _configuration = builder.Build();
            _connectionString = _configuration.GetConnectionString("DefaultConnection");
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            services.AddCors();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info
                {
                    Version = "v1",
                    Title = "Employee.API",
                });

                var filePath = Path.Combine(AppContext.BaseDirectory, "Transaction.API.xml");
            });

            services.AddTransient<IEmployeeRepository>(c => new EmployeeService(_connectionString));
            services.AddTransient<IModuleRepository>(c => new ModuleService(_connectionString));
            services.AddTransient<IMachineRepository>(c => new MachineService(_connectionString));
            services.AddTransient<IVehicleRepository>(c => new InventoryVehicleService(_connectionString));
            services.AddTransient<IVehicleRepository>(c => new InventoryVehicleService(_connectionString));
            services.AddTransient<IOfferRepository>(c => new OfferService(_connectionString));
            services.AddTransient<ITranscationRepository>(c => new TranscationServices(_connectionString));
            services.AddTransient<IInvoiceRepository>(c => new InvoiceServices(_connectionString));

            services.AddTransient<Ivehicle>(c => new vehicleService(_connectionString));
            services.AddTransient<IMachinery>(c => new mchineryService(_connectionString));
            services.AddTransient<IEquipmentCategory>(c => new EquipmentCategoryService(_connectionString));
          
            services.AddTransient<IMachineDetailsRepository>(c => new MachineDetailsService(_connectionString));
            services.AddTransient<IVehicleDetailsRepository>(c => new VehicleDetailsService(_connectionString));
            services.AddTransient<IRentalMasterRepository>(c => new RentalMasterService(_connectionString));
            services.AddTransient<IMyRentalsRepository>(c => new MyRentalsService(_connectionString));



        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }


            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Version 1");
            });

            app.UseHttpsRedirection();

            app.UseCors(builder => builder.AllowAnyHeader().AllowAnyOrigin().WithMethods("OPTIONS", "GET", "POST", "PUT", "DELETE"));

            app.UseMvc();
        }
    }
}
