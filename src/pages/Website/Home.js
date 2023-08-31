import React from 'react'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import HeroImage from '../../assets/images/homeheroimage.png'
import Footer from '../../components/Footer';

function Home() {
  return (
    <>
      <div><GuestNavbar /></div>
      <div>
          <img src={HeroImage} alt="Hero" />
      </div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec suscipit mauris. Vivamus eu mauris eu dolor tincidunt convallis. Nullam vel ligula bibendum, malesuada elit nec, egestas risus. Nullam non ex cursus, pellentesque tellus vel, tristique libero. Sed id orci eget felis volutpat fermentum. Vivamus in efficitur est, a tempor turpis. Suspendisse potenti. Maecenas feugiat arcu vel justo ullamcorper fermentum. In hac habitasse platea dictumst. Fusce eget libero neque. Duis dapibus felis dui, ac auctor arcu facilisis nec.

Vestibulum at malesuada libero, nec blandit velit. Vivamus vehicula dapibus enim in hendrerit. Sed ultrices, arcu eget congue fermentum, erat purus scelerisque nunc, eu cursus ex odio non purus. Nullam sit amet arcu in tortor dictum dignissim. Sed aliquet dapibus bibendum. Fusce consectetur, lectus ut vestibulum sagittis, augue elit lacinia mauris, ac suscipit urna ligula eu libero. Nunc vel scelerisque lectus. Etiam a eros at dui egestas placerat a nec urna.

Vestibulum in justo eu elit sagittis scelerisque. Aliquam tincidunt auctor tellus, nec egestas orci bibendum at. Nulla efficitur ante risus, non cursus metus auctor id. Nam interdum fermentum metus, nec auctor nulla facilisis nec. Praesent efficitur justo risus, vel tincidunt elit tincidunt a. Vestibulum et blandit nunc. Praesent quis vulputate nulla. Nullam mattis, turpis ac suscipit accumsan, risus mi vehicula orci, in malesuada ipsum tellus et felis. Vivamus eleifend lacus id fermentum scelerisque. Fusce ac venenatis nisi, non sagittis nulla. Nunc tincidunt justo nec mi vestibulum scelerisque. Ut eget nibh id turpis cursus gravida.

Cras vel risus quis justo condimentum finibus. Curabitur euismod nulla id quam varius, in luctus mauris iaculis. Curabitur eleifend, ante a dignissim cursus, lectus purus facilisis risus, ac finibus nisi eros eget ex. Vivamus maximus euismod quam in cursus. Sed tempus, ante in laoreet suscipit, metus est congue nisl, eu consectetur erat tortor eget ante. Sed efficitur nec tellus at fermentum. Etiam a metus quis tortor viverra vehicula at vel elit.

Quisque finibus laoreet libero, eu cursus nunc vestibulum nec. Sed eget metus id est posuere fermentum. Sed vel auctor tellus. Donec tristique gravida justo, eget bibendum dolor feugiat non. Suspendisse auctor, libero id vehicula pellentesque, enim purus aliquet mi, ac varius metus ante ut orci. Aliquam erat volutpat. Ut fringilla non mi nec iaculis. Sed pulvinar elit nec odio ultricies fringilla. Donec non vehicula enim.

Nullam non fermentum velit, sit amet tincidunt turpis. Ut eleifend, metus et iaculis dictum, nulla lorem viverra ex, vel vestibulum mauris turpis sed risus. Duis eu imperdiet nulla. Sed feugiat ex at nisl dapibus, sit amet tincidunt nisi egestas. Nunc aliquet risus nec velit finibus dictum. Vivamus et sapien justo. Nullam non leo vel nisl tincidunt cursus in vel ante. Nulla facilisi. Donec rhoncus justo arcu, a interdum tellus ultrices a. Integer sed tristique libero.

In fringilla, enim ut cursus scelerisque, sapien metus fringilla elit, in semper nisi ante non dui. Integer fringilla enim id dui laoreet sollicitudin. Integer euismod neque et vehicula posuere. Praesent consectetur fringilla dapibus. Fusce laoreet tincidunt dui non dictum. Donec bibendum orci vel mauris dictum, sit amet euismod ante elementum. Duis vel libero sem. Quisque laoreet elit eu arcu lacinia tristique. Donec ut ex vitae odio tristique elementum.

Phasellus
    <div className='footer-hero'>
      <img src={HeroImage} alt="Hero" />
    </div>
      <Footer/>
    </>
  );
} 

export default Home