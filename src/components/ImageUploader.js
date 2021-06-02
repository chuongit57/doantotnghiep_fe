/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button'
import {head, isEmpty} from 'lodash'
import {makeStyles} from '@material-ui/core/styles'
import clsx from 'clsx'
import {useOnEditEProduct} from '../hooks/editProduct'

const ImageUploader = React.memo((props) => {
  const {name, onChange, value} = props
  const classes = useClass()
  // const onEditEProduct = useOnEditEProduct()
  const imageFile = null
  const [open, setOpen] = React.useState(false)
  const onOpen = React.useCallback(() => {
    setOpen(true)
  }, [])
  const onClose = React.useCallback(() => {
    setOpen(false)
  }, [])
  const onSave = React.useCallback((files) => {
    const file = head(files)
    if (file) {
      onChange(name, file)
      setOpen(false)
    }
  }, [])

  const acceptedFiles = React.useMemo(() => {
    return ['image/jpeg', 'image/png', 'image/bmp']
  }, [])

  const imageSource = React.useMemo(() => {
    if (value) {
      return URL.createObjectURL(value)
    }
    return null
  }, [value])

  const imageUrl = null
  const renderImageUrl = isEmpty(imageUrl) ? imageSource : imageUrl
  let contentView
  if (renderImageUrl) {
    contentView = <img className={clsx(classes.imageContainer)} src={renderImageUrl} onClick={onOpen} />
  } else {
    contentView = (
      <Button fullWidth className={clsx(classes.buttonContainer)} onClick={onOpen}>
        Add Image
      </Button>
    )
  }
  return (
    <div className={clsx(classes.container)}>
      {contentView}
      <DropzoneDialog open={open} onSave={onSave} filesLimit={1} acceptedFiles={acceptedFiles} showPreviews={true} maxFileSize={5000000} clearOnUnmount={true} onClose={onClose} />
    </div>
  )
})
const useClass = makeStyles(() => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    imageContainer: {
      display: 'flex',
      maxHeight: '100%',
      maxWidth: '100%',
    },
    buttonContainer: {
      display: 'flex',
      flex: 1,
    },
  }
})
export default ImageUploader
