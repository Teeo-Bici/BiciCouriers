# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "seeding"
Service.destroy_all

Service.create(
  {
    title: "Transport urgent",
    content: "Vous avez une demande express ? Vous souhaitez faire livrer une lettre ou un colis pendant les heures de pointes ? La livraison express  par coursiers à vélos sur Nantes est la plus rapide ! Nos coursiers pratique le cyclisme sportif et mettent leur efficacité à votre service en livrant votre colis 45 minutes seulement après votre demande."
  }
)

Service.create(
  {
    title: "Ship from store",
    content: "Facilitez la logistique de vos produits entre vos différents magasins ! Un coursier enlève la marchandise d’un magasin A vers un magasin B ou directement chez votre client, notamment lors des périodes de soldes où les stocks s’écoulent rapidement. Un avantage logistique qui n’est pas dépendant du trafic automobile de la ville."
  }
)

Service.create(
  {
    title: "Mutualisation",
    content: "Du ramassage de courrier à la tournée de livraison  de flyers et prospectus commercial, optez pour une solution rapide, économique et eco-friendly. Nos coursiers peuvent récupérer vos colis dans vos agences pour mutualiser la livraison, ou inversement. Profitez de nos vélos cargos pour faire livrer de nombreux colis ou objets encombrants ! "
  }
)

Service.create(
  {
    title: "Privatisation",
    content: "Privatisez un de nos livreur coursier pour l’organisation et le déroulement de vos événements ! Mettez à votre dispositions des mollets de compétitions pour anticiper et gérer tous vos besoins de transport de matériel et autres éléments avec la plus grande rapidité et réactivité. Adieu le problème des bouchons ! "
  }
)

Service.create(
  {
    title: "Gestion de boîte postale",
    content: "La légendaire tournée du facteur est trop tardive ?
Bici Couriers répond à votre demande en toute simplicité. Choisissez une heure de dépôt et de retrait du courrier et laissez vous du temps pour faire autre chose.
Plus besoin de courir à la poste avant qu’elle ferme !",
    images: "services/relai_poste.png",
    details: "La légendaire tournée du facteur est trop tardive ?
Bici Couriers répond à votre demande en toute simplicité. Choisissez une heure de dépôt et de retrait du courrier et laissez vous du temps pour faire autre chose.
Plus besoin de courir à la poste avant qu’elle ferme !"
  }
)

Service.create(
  {
    title: "Sur mesure",
    content: "Vous avez un besoin ou une demande particulière pour nous ?
Bici Couriers s’engage à réaliser tous les défis (dans la limite du réalisable). On vous parie qu’on y arrivera #transportdecanapé.
Nous proposons également des abonnements et carnets de tickets pour les demandes récurrentes. "
  }
)

Avantage.create(
  {
    image_pour: "avantages/co2.svg",
  }
)
Avantage.create(
  {
    image_pour: "avantages/logique.svg",
  }
)
Avantage.create(
  {
    image_pour: "avantages/courbature.svg",
  }
)
Avantage.create(
  {
    image_pour: "avantages/sympa.svg",
  }
)
Avantage.create(
  {
    image_pour: "avantages/stress.svg",
  }
)





puts "ok"
