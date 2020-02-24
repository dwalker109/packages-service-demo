import { getConnection, InsertResult } from "typeorm";
import { Package } from "../src/entities/Package";

const seedPackages = (): Promise<InsertResult> =>
  getConnection()
    .createQueryBuilder()
    .insert()
    .into(Package)
    .values([
      {
        name: "Magna nisi officia aliqua",
        description:
          "Sunt nisi deserunt eu deserunt non ipsum do et deserunt velit. Magna proident esse consectetur aliquip laboris est adipisicing aliquip laborum est reprehenderit minim esse. Minim ad incididunt pariatur consectetur consequat sunt irure dolor veniam tempor aute. Officia tempor consectetur minim nostrud anim enim ex officia quis consectetur voluptate eu eu in. Laboris consectetur consequat do ipsum consequat eiusmod dolore nisi qui sint sint aute incididunt cupidatat.",
        products: [
          {
            id: "PKM5pGAh9yGm",
            name: "Axe",
            price: 799,
          },
          {
            id: "7Hv0hA2nmci7",
            name: "Knife",
            price: 349,
          },
          {
            id: "8anPsR2jbfNW",
            name: "Silver Coin",
            price: 50,
          },
        ],
        price: 999,
      },
      {
        name: "Nostrud ea cupidatat magna",
        description:
          "Sunt nisi deserunt eu deserunt non ipsum do et deserunt velit. Magna proident esse consectetur aliquip laboris est adipisicing aliquip laborum est reprehenderit minim esse. Minim ad incididunt pariatur consectetur consequat sunt irure dolor veniam tempor aute. Officia tempor consectetur minim nostrud anim enim ex officia quis consectetur voluptate eu eu in. Laboris consectetur consequat do ipsum consequat eiusmod dolore nisi qui sint sint aute incididunt cupidatat.",
        products: [
          {
            id: "7Hv0hA2nmci7",
            name: "Knife",
            price: 349,
          },
          {
            id: "500R5EHvNlNB",
            name: "Gold Coin",
            price: 249,
          },
        ],
        price: 500,
      },
      {
        name: "Laboris exercitation esse culpa eiusmod est in",
        description:
          "Id irure et et aliqua aliqua ea. Id non sit sit cillum officia culpa et velit magna nisi qui occaecat. Enim enim ea exercitation est incididunt et.",
        products: [
          {
            id: "DXSQpv6XVeJm",
            name: "Helmet",
            price: 999,
          },
          {
            id: "PKM5pGAh9yGm",
            name: "Axe",
            price: 799,
          },
          {
            id: "500R5EHvNlNB",
            name: "Gold Coin",
            price: 249,
          },
          {
            id: "IP3cv7TcZhQn",
            name: "Platinum Coin",
            price: 399,
          },
          {
            id: "IJOHGYkY2CYq",
            name: "Bow",
            price: 649,
          },
          {
            id: "8anPsR2jbfNW",
            name: "Silver Coin",
            price: 50,
          },
        ],
        price: 2000,
      },
      {
        name: "Do quis ad nisi aliqua",
        description:
          "Tempor eu do sunt mollit consequat labore est. Commodo reprehenderit aliquip ipsum deserunt ad aliqua laboris culpa magna incididunt anim consectetur deserunt fugiat. Eu ex deserunt velit ea.",
        products: [
          {
            id: "IJOHGYkY2CYq",
            name: "Bow",
            price: 649,
          },
          {
            id: "8anPsR2jbfNW",
            name: "Silver Coin",
            price: 50,
          },
        ],
        price: 649,
      },
      {
        name: "Consequat deserunt nostrud proident",
        description:
          "Adipisicing veniam fugiat voluptate in duis enim proident aliquip labore. Est et id enim sit ex exercitation aute. Reprehenderit laboris laboris consequat ullamco deserunt.",
        products: [
          {
            id: "DXSQpv6XVeJm",
            name: "Helmet",
            price: 999,
          },
          {
            id: "PKM5pGAh9yGm",
            name: "Axe",
            price: 799,
          },
          {
            id: "500R5EHvNlNB",
            name: "Gold Coin",
            price: 249,
          },
          {
            id: "IJOHGYkY2CYq",
            name: "Bow",
            price: 649,
          },
          {
            id: "8anPsR2jbfNW",
            name: "Silver Coin",
            price: 50,
          },
        ],
        price: 999,
      },
      {
        name: "Esse occaecat tempor aute voluptate",
        description:
          "Tempor enim aliquip fugiat elit minim in. Officia quis laborum ex Lorem sint occaecat dolor culpa aute sunt sunt. Tempor sunt qui sint do. Sit duis do consequat sit eu sunt est labore laborum ipsum elit nulla. Ex magna ipsum velit dolore anim duis ullamco commodo et nulla dolore officia exercitation est. Aute sunt dolore consectetur reprehenderit occaecat ipsum proident Lorem.",
        products: [
          {
            id: "VqKb4tyj9V6i",
            name: "Shield",
            price: 1149,
          },
          {
            id: "DXSQpv6XVeJm",
            name: "Helmet",
            price: 999,
          },
          {
            id: "7dgX6XzU3Wds",
            name: "Sword",
            price: 899,
          },
          {
            id: "PKM5pGAh9yGm",
            name: "Axe",
            price: 799,
          },
          {
            id: "7Hv0hA2nmci7",
            name: "Knife",
            price: 349,
          },
          {
            id: "500R5EHvNlNB",
            name: "Gold Coin",
            price: 249,
          },
          {
            id: "IP3cv7TcZhQn",
            name: "Platinum Coin",
            price: 399,
          },
          {
            id: "IJOHGYkY2CYq",
            name: "Bow",
            price: 649,
          },
          {
            id: "8anPsR2jbfNW",
            name: "Silver Coin",
            price: 50,
          },
        ],
        price: 4000,
      },
      {
        name: "Eiusmod aliqua nisi incididunt do aliquip",
        description:
          "Quis consectetur pariatur commodo minim et do Lorem ut dolore nulla ad sunt adipisicing. Velit fugiat quis consequat laborum exercitation velit ipsum enim et tempor ullamco. Esse aute ipsum anim do occaecat dolor deserunt et tempor anim. Commodo non aute adipisicing minim nulla. Consequat dolor occaecat officia laborum ut in pariatur enim ipsum sit laborum. Anim consequat culpa reprehenderit quis ea deserunt Lorem officia incididunt cillum.",
        products: [
          {
            id: "IJOHGYkY2CYq",
            name: "Bow",
            price: 649,
          },
          {
            id: "8anPsR2jbfNW",
            name: "Silver Coin",
            price: 50,
          },
        ],
        price: 750,
      },
      {
        name: "Velit non velit quis ipsum nulla",
        description:
          "Sint officia non ut fugiat sit reprehenderit in excepteur. Dolore elit ullamco aliqua officia dolor adipisicing exercitation quis. Ipsum pariatur excepteur Lorem velit.",
        products: [
          {
            id: "DXSQpv6XVeJm",
            name: "Helmet",
            price: 999,
          },
          {
            id: "PKM5pGAh9yGm",
            name: "Axe",
            price: 799,
          },
          {
            id: "500R5EHvNlNB",
            name: "Gold Coin",
            price: 249,
          },
          {
            id: "IJOHGYkY2CYq",
            name: "Bow",
            price: 649,
          },
        ],
        price: 1500,
      },
      {
        name: "Ad ut eu nisi minim velit ex",
        description:
          "Tempor fugiat proident enim amet est. Ut cupidatat dolore culpa tempor duis velit quis occaecat ad in amet culpa. Proident deserunt officia commodo aliqua reprehenderit consequat enim tempor nisi est esse.",
        products: [
          {
            id: "PKM5pGAh9yGm",
            name: "Axe",
            price: 799,
          },
          {
            id: "8anPsR2jbfNW",
            name: "Silver Coin",
            price: 50,
          },
        ],
        price: 800,
      },
      {
        name: "Quis occaecat anim quis consequat minim",
        description:
          "Consequat nulla occaecat ad mollit et ea sit adipisicing consequat duis magna consequat. Id nisi in cupidatat exercitation quis ad tempor id consectetur voluptate. Quis amet irure aute officia incididunt. Sit magna voluptate qui pariatur exercitation et pariatur dolore pariatur incididunt minim.",
        products: [
          {
            id: "7dgX6XzU3Wds",
            name: "Sword",
            price: 899,
          },
          {
            id: "PKM5pGAh9yGm",
            name: "Axe",
            price: 799,
          },
          {
            id: "IJOHGYkY2CYq",
            name: "Bow",
            price: 649,
          },
          {
            id: "8anPsR2jbfNW",
            name: "Silver Coin",
            price: 50,
          },
        ],
        price: 1400,
      },
      {
        name: "Tempor ad Lorem velit ea ex aliqua nostrud",
        description:
          "Fugiat pariatur sit sit Lorem dolore labore nulla irure. Mollit aliqua eiusmod pariatur anim. Adipisicing qui ipsum est adipisicing veniam. Laboris sunt nostrud qui amet est sint ullamco sit velit do culpa. Culpa commodo culpa sunt aliqua laborum magna enim. Incididunt laboris enim nostrud consequat sint cillum culpa pariatur est nisi ut esse cupidatat incididunt.",
        products: [
          {
            id: "VqKb4tyj9V6i",
            name: "Shield",
            price: 1149,
          },
          {
            id: "DXSQpv6XVeJm",
            name: "Helmet",
            price: 999,
          },
          {
            id: "7dgX6XzU3Wds",
            name: "Sword",
            price: 899,
          },
          {
            id: "PKM5pGAh9yGm",
            name: "Axe",
            price: 799,
          },
          {
            id: "7Hv0hA2nmci7",
            name: "Knife",
            price: 349,
          },
          {
            id: "500R5EHvNlNB",
            name: "Gold Coin",
            price: 249,
          },
          {
            id: "IP3cv7TcZhQn",
            name: "Platinum Coin",
            price: 399,
          },
          {
            id: "IJOHGYkY2CYq",
            name: "Bow",
            price: 649,
          },
          {
            id: "8anPsR2jbfNW",
            name: "Silver Coin",
            price: 50,
          },
        ],
        price: 1900,
      },
    ])
    .execute();

const shouldSeed = async (): Promise<boolean> => {
  const packagesCount = await getConnection()
    .createQueryBuilder()
    .from(Package, "packages")
    .getCount();

  return packagesCount === 0;
};

export default (): Promise<InsertResult[]> => Promise.all([seedPackages()]);
export { shouldSeed };
