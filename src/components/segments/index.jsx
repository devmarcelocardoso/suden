import { Icon } from "@iconify/react";
import TabSwitcher from "./tabSwitcher";

function Segments(){
  return(
    <TabSwitcher tabs={[
      {
        id: 'componentes',
        header: 'Componentes',
        icon: <Icon icon='iconoir:electronics-chip' height='20'/>,
        content: <p>Donec rhoncus volutpat libero sed rhoncus. Proin porta suscipit lacinia. Fusce consequat viverra ex in mattis. Quisque eu massa semper, porta elit sit amet, pellentesque ligula. Morbi at eleifend justo. Nunc aliquet efficitur lacus, sed malesuada nibh fringilla eget. Suspendisse.</p>
      },
      {
        id: 'redes',
        header: 'Redes',
        icon: <Icon icon='iconoir:www' height='20'/>,
        content: <p>Curabitur ultrices pulvinar sapien ac interdum. Donec id bibendum neque, at rhoncus ipsum. Nunc placerat ullamcorper consequat. Aenean dolor nisi, tincidunt tincidunt efficitur sit amet, ultrices at nisl. Suspendisse eros metus, dapibus eu diam at, sollicitudin tristique sapien. Morbi mattis.</p>
      },
      {
        id: 'industria',
        header: 'Indústria',
        icon: <Icon icon='iconoir:industry' height='20'/>,
        content: <p>Morbi sem diam, consequat id ullamcorper et, dignissim ut lorem. Sed euismod diam eu leo feugiat, non accumsan metus iaculis. Nulla at gravida ex. Nunc non tincidunt neque, eget ornare leo. Class aptent taciti sociosqu ad litora torquent per conubia.</p>
      },
      {
        id: 'residencial',
        header: 'Residencial',
        icon: <Icon icon='iconoir:home-alt' height='20'/>,
        content: <p>Curabitur ultrices pulvinar sapien ac interdum. Donec id bibendum neque, at rhoncus ipsum. Nunc placerat ullamcorper consequat. Aenean dolor nisi, tincidunt tincidunt efficitur sit amet, ultrices at nisl. Suspendisse eros metus, dapibus eu diam at, sollicitudin tristique sapien. Morbi mattis.</p>
      },
      {
        id: 'hospital',
        header: 'Hospital',
        icon: <Icon icon='iconoir:hospital' height='20'/>,
        content: <p>Aliquam sagittis volutpat pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean vitae massa scelerisque, posuere odio ac, efficitur felis. Praesent convallis tellus ut ante aliquam, in sagittis sem fringilla. Nullam varius tellus arcu.</p>
      }
    ]} />
  )
}

export default Segments;