import React, {useCallback, useEffect, useState} from "react";
import {
  Button,
  Empty,
  Image,
  Modal,
  Spin,
  notification,
} from "antd";
import { PlusOutlined} from "@ant-design/icons";
import { FormattedMessage } from "react-intl";
import messages from "../../messages";
import EditCarForm from "./components/EditCarForm";
import ShowCarForm from "./components/ShowCarFrom";
import { Actions } from "./components/TableColumnFields"

import { addNewCar, editCar, fetchCarsByUser } from "../../../api";

function Cars() {
  const [addCarModal, setAddCarModal] = useState(false);
  const [showCarModal, setShowCarModal] = useState(false);
  const [editCarInfos, setCarInfo] = useState({});
  const [carCatalog, setCarCatalog] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  const handleAddCar = () => {
    setAddCarModal(true);
  };
  const handleShowCar = useCallback((car) => {
    setCarInfo(car);
    setShowCarModal(true);
  }, []);
  const closeShowCar = () => {
    setShowCarModal(false);
    setCarInfo({});
  };
  const onValidateAction = (payload) => {
    addCar(payload);
  };
  const onCancelAction = () => {
    setAddCarModal(false);
  };
  const onEditAction = useCallback((car) => {
    setCarInfo(car);
    handleAddCar(true);
  }, [])
  const handleActionClick = useCallback(
      (action, car) => {
        switch (action.key) {
          case "viewDetails":
            console.log(car);
            handleShowCar(car);
            break;
          case "editCar":
            debugger;
            onEditAction(car);
            break;
          default:
            break;
        }
      },
      [handleShowCar, onEditAction],
  );

  const addCar = async (payload) => {
    try {
      const token = localStorage.getItem("token");
      if (editCarInfos?.id) {
        const carId = editCarInfos?.id;
        await editCar({token, carId, payload});
      }else await addNewCar({ token, payload });
      setAddCarModal(false);
      fetchCars();
      notification.success({
        message: "Car added successfully",
        placement: "top",
      });
    } catch (error) {
      notification.error({
        message: "Failed to add car",
        description: error?.response?.data?.detail,
        placement: "top",
      });
    }
  };
  const fetchCars = async () => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("currentUser");
    try {
      const response = await fetchCarsByUser({ username, token });
      setCarCatalog(response);
    } catch (error) {
      notification.error({
        message: "Failed to fetch cars",
        description: error?.response?.data?.detail,
        placement: "bottomRight",
      });
    }
  };
  useEffect(() => {
    setIsLoading(true);
    fetchCars();
    setIsLoading(false);
  }, []);

  return (
    <div className="container h-full-car">
      <div className="flex justify-end">
        <Button
          className="flex justify-center items-center"
          type="primary"
          style={{ width: 198 }}
          onClick={handleAddCar}
        >
          <PlusOutlined /> New car
        </Button>
      </div>

      <Spin spinning={isloading}>
        <div className="mt-5">
          {carCatalog.length ? (
            carCatalog.map((car) => (
              <div className="p-10 bg-slate-900 bg-opacity-80 rounded-lg shadow-xl mb-4">
                <div className="flex justify-between mb-4">
                  <div className="text-center">
                    <span className="text-white font-bold text-lg">
                      {car.carName}
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <Actions onActionClick={action => handleActionClick(action, car)} />
                  </div>
                </div>
                <div className="">
                  <Image
                    width={"100%"}
                    src={car.image_url}
                    alt={car.carName}
                    className="rounded-xl"
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="w-full flex justify-center items-center">
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </div>
          )}
        </div>
      </Spin>

      <Modal
        title={<FormattedMessage {...messages.addNewCarTitle} />}
        width={800}
        open={addCarModal}
        onCancel={onCancelAction}
        footer={null}
        destroyOnClose
      >
        <EditCarForm
          onValidateAction={onValidateAction}
          onCancelAction={onCancelAction}
          editCarInfos={editCarInfos}
        />
      </Modal>
      <Modal
        title={editCarInfos.carName}
        width={600}
        centered
        open={showCarModal}
        onCancel={closeShowCar}
        footer={null}
        destroyOnClose
      >
        <ShowCarForm editCarInfos={editCarInfos} />
      </Modal>
    </div>
  );
}

export default Cars;
