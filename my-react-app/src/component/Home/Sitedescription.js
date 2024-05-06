import { ReactComponent as CalendarIcon } from '../../icons/calender-svgrepo-com.svg';
import { ReactComponent as ShoppingBagIcon } from '../../icons/shopping-bag-01-svgrepo-com.svg';
import { ReactComponent as GiftIcon } from '../../icons/gift-svgrepo-com.svg';
import { ReactComponent as ArrowCycleIcon } from '../../icons/two-thin-arrows-forming-a-circle-svgrepo-com.svg';

function Sitedescription (){
  return (
    <>
      <section className="features py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center aos-init aos-animate" data-aos="fade-in" data-aos-delay="0">
              <div className="py-5">
                <CalendarIcon width="38" height="38" className="svg-color" />
                <h4 className="element-title text-capitalize my-3">Book An Appointment</h4>
                <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
              </div>
            </div>
            <div className="col-md-3 text-center aos-init aos-animate" data-aos="fade-in" data-aos-delay="300">
              <div className="py-5">
                <ShoppingBagIcon width="38" height="38" className="svg-color" />
                <h4 className="element-title text-capitalize my-3">Pick up in store</h4>
                <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
              </div>
            </div>
            <div className="col-md-3 text-center aos-init aos-animate" data-aos="fade-in" data-aos-delay="600">
              <div className="py-5">
                <GiftIcon width="38" height="38" className="svg-color" />
                <h4 className="element-title text-capitalize my-3">Special packaging</h4>
                <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
              </div>
            </div>
            <div className="col-md-3 text-center aos-init aos-animate" data-aos="fade-in" data-aos-delay="900">
              <div className="py-5">
                <ArrowCycleIcon width="38" height="38" className="svg-color" />
                <h4 className="element-title text-capitalize my-3">free global returns</h4>
                <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sitedescription;
