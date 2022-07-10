import Link from "next/Link";

interface MenuItemProps {
  href: string;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
  return (
    <li>
      <Link href={props.href}>
        <a className="has-text-black">
          <span className="icon"></span>
          {props.label}
        </a>
      </Link>
    </li>
  );
};

export const Menu: React.FC = () => {
  return (
    <aside className="column is-2 is narrow-mobile is-fullheight section is-hidden-mobile has-background-grey-lighter">
      <p className="menu-label is-hidden-touch has-text-black has-text-weight-bold is-size-6 has-text-centered"> Minhas Vendas</p>

      <ul className="menu-list ">
        <MenuItem href="/" label="Home"/>
        <MenuItem href="/" label="Cadastros" />
        <MenuItem href="/" label="Config" />
        <MenuItem href="/" label="Sair" />
      </ul>
    </aside>
  );
};
