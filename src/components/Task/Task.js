import React, { Component } from 'react';
import ClickOutside from 'react-click-outside';
import './styles.scss';

class Task extends Component {

  constructor(props) {
    super(props);
    this.state = {
      taskEditBtnShow: false,
    }

    this.taskContainer = React.createRef();
    this.taskMenuWrapper = React.createRef();
    this.taskMenuTextArea = React.createRef();
    
  } 

  componentDidUpdate() {
    if (!this.taskMenuTextArea.current && !this.taskMenuWrapper.current) return;
    this.taskMenuTextArea.current.focus();
    const top = this.taskContainer.current.getBoundingClientRect().y;
    this.taskMenuWrapper.current.style.top = top + 'px';
  }
  taskMenuHide = () => {
    this.setState({ taskEditBtnShow: false });
  };

  taskMenuToggle = () => {
    const { taskEditBtnShow } = this.state;
    this.setState({ taskEditBtnShow: !taskEditBtnShow });
  };
  
  handleEditTask = (e) => {
    e.preventDefault();
  };

  handleRemoveTask = (e) => {
    e.preventDefault();
    const { id, listId, removeTask } = this.props;

    removeTask(id, listId);
    this.taskMenuHide();
  };
  render() {

    const { id, text } = this.props;
    const { taskEditBtnShow } = this.state;
    return (
      <div className="task" ref={this.taskContainer}>
        <button 
          className={'task__edit-btn ' + (taskEditBtnShow ? 'task__edit-btn_show' : '')} 
          onClick={this.taskMenuToggle}
        >
          <span>
            <i className="fas fa-pen"></i>
          </span>
        </button>
        
        <h2 className="task__title">{id}: {text}</h2>

        <ClickOutside 
          className="clickOutSide" 
          onClickOutside={this.taskMenuHide}
        >
          {taskEditBtnShow && (
            <div 
              className="task-menu-wrapper" 
              ref={this.taskMenuWrapper}
            >

              <div 
                className="task-menu-wrapper__fade" 
                onClick={this.taskMenuToggle} 
              />

              <div className="task-menu-wrapper__inner">

                <form action="#" className="task-menu-fields">
                  <textarea 
                    className="task-menu-fields__textarea" 
                    ref={this.taskMenuTextArea} 
                  />
                  <button 
                    className="task-menu-fields__btn" 
                    onClick={this.handleEditTask}
                  >
                    Сохранить
                  </button>
                </form>

                <ul className="task-menu">
                  <li className="task-menu__item">
                    <button className="task-menu__btn" onClick={this.handleRemoveTask}>
                      <i className="far fa-file-archive"></i>
                      Архивировать
                    </button>
                  </li>
                </ul>

              </div>
            </div>
          )}
        </ClickOutside>
      </div>
    );
  }
}

export default Task;