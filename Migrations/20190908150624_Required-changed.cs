using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebSite.Migrations
{
    public partial class Requiredchanged : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Verbs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Translation = table.Column<string>(nullable: true),
                    IndicativoPresenteP1 = table.Column<string>(nullable: true),
                    IndicativoPresenteP2 = table.Column<string>(nullable: true),
                    IndicativoPresenteP3 = table.Column<string>(nullable: true),
                    IndicativoPresenteM1 = table.Column<string>(nullable: true),
                    IndicativoPresenteM2 = table.Column<string>(nullable: true),
                    IndicativoPresenteM3 = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Verbs", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Verbs");
        }
    }
}
