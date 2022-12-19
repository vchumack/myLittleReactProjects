import { Button } from "components/Button";
import { Modal } from "components/Modal";
import { Title } from "components/Title";
import { useState } from "react";
import styles from './OpenModal.module.scss';

export const OpenModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Title text="Check out something interesting:" />
      <Button onClick={()=> setOpen(true)} className={styles.openModalBtn} text="View dance of the year"/>
      
      <Modal open={open} setOpen={setOpen} >
        <iframe width="700" height="392" src="https://www.youtube.com/embed/NakTu_VZxJ0" title="Wednesday Addams | Dance Scene | Netflix"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Modal>
      
      
    </>
  )
}

