﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebSite.Models;

namespace WebSite.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20190908150624_Required-changed")]
    partial class Requiredchanged
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebSite.Models.VerbModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("IndicativoPresenteM1");

                    b.Property<string>("IndicativoPresenteM2");

                    b.Property<string>("IndicativoPresenteM3");

                    b.Property<string>("IndicativoPresenteP1");

                    b.Property<string>("IndicativoPresenteP2");

                    b.Property<string>("IndicativoPresenteP3");

                    b.Property<string>("Name");

                    b.Property<string>("Translation");

                    b.HasKey("Id");

                    b.ToTable("Verbs");
                });
#pragma warning restore 612, 618
        }
    }
}
